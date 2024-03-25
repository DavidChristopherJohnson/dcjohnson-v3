import { NextResponse } from "next/server";
import {jsPDF} from "jspdf";

const generatePdf = () => {
    const doc = new jsPDF();

    doc.text("Hello World!", 10, 10)
    doc.save('cv.pdf');

    return doc.output();
}

// To handle a GET request to /api
export async function GET(request) {

    const pdf = generatePdf();

    // const stream = pdf.pipe(blobStream());

    // stream.on('finish', () => {
    //     const blob = stream.toBlob('application.pdf');    })

    const headers = new Headers();
    headers.append('Content-Type', 'application.pdf');

    // Do whatever you want
    return new NextResponse(pdf, { headers })
}
