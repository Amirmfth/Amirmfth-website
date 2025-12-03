import PDFDocument from 'pdfkit';
import {NextRequest, NextResponse} from 'next/server';
import {Readable} from 'stream';
import {getCvProfile} from '../../../lib/cv';

export async function GET(request: NextRequest) {
  const {searchParams} = new URL(request.url);
  const locale = searchParams.get('locale') ?? 'en';
  const profile = getCvProfile(locale);

  const doc = new PDFDocument({margin: 50});
  const stream = Readable.from(doc as unknown as NodeJS.ReadableStream);

  doc.fontSize(18).text(profile.name, {align: 'center'});
  doc.moveDown(0.5);
  doc.fontSize(14).text(profile.role, {align: 'center'});
  doc.moveDown();

  doc.fontSize(12).text(profile.summary);
  doc.moveDown();

  doc.fontSize(14).text(locale === 'fa' ? 'مهارت‌ها' : 'Skills');
  doc.fontSize(12).list(profile.skills);
  doc.moveDown();

  doc.fontSize(14).text(locale === 'fa' ? 'تجربه' : 'Experience');
  profile.experience.forEach((item) => {
    doc.fontSize(12).text(`${item.title} – ${item.company} (${item.years})`);
    doc.text(item.details);
    doc.moveDown(0.5);
  });
  doc.moveDown();

  doc.fontSize(14).text(locale === 'fa' ? 'تحصیلات' : 'Education');
  profile.education.forEach((item) => {
    doc.fontSize(12).text(`${item.school} (${item.years})`);
    doc.text(item.details);
    doc.moveDown(0.5);
  });

  doc.end();

  const response = new NextResponse(stream as unknown as BodyInit, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${profile.name.replace(/\s+/g, '-')}-CV.pdf"`
    }
  });

  return response;
}
