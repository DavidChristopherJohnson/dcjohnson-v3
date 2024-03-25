import { NextResponse } from "next/server";
import {jsPDF} from "jspdf";

//Experiment with these values to change the look of the page
const defaultFont = 'helvetica'
const defaultTextSize = 14;
const defaultVerticalPadding = 2;


const defaultTextHeight = 6;
const pageTitleSize = 18;
const sectionTitleSize = 16;
const subSectionTitleSize = 14;

const leftColumnWidth =  70;

const defaultX = 10;

let currentX = defaultX;
let currentY = 10;
let doc = new jsPDF();

const addPageTitle = (text: string) => {
    resetX();
    addTextToDoc(text, pageTitleSize, 'bold', 2);
    addNewLine();
}

const resetX = () => {
    currentX = defaultX;
}

const addSectionTitle = (text: string) => {        
    addTextToDoc(text, sectionTitleSize, 'bold');
    addNewLine();
}

const addTextLeft = (text: string) => {
    resetX();
    addTextToDoc(text);
}

const addTextRight = (text: string) => {
    currentX = defaultX + leftColumnWidth;
    addTextToDoc(text);
}

const addVerticalPadding = (paddingSize:number = defaultVerticalPadding) => {
    currentY += paddingSize;
}

const addNewLine = (textHeight: number = defaultTextHeight) => {
    currentY += defaultTextHeight;
}

const addHorizontalLine = () => {
    resetX();
    doc.line(currentX, currentY, currentX + 180, currentY, 'S');
}

const addTextToDoc = (text: string, textSize:number=defaultTextSize, fontStyle:string = 'normal', lineHeight: number = defaultTextHeight) => {
    doc.setFontSize(textSize).setFont(defaultFont, fontStyle);
    doc.text(text, currentX, currentY);
}


const generatePdf = () => {
    //Reset for fresh document
    currentX = 10;
    currentY = 10;
    doc = new jsPDF();

    addPageTitle('David Johnson');
    addHorizontalLine();
    addVerticalPadding(defaultTextHeight);
    addSectionTitle("Summmary");
    addVerticalPadding();
    addTextLeft("Hello World!");
    addTextRight("Hello World!");

    doc.save('cv.pdf');

    return doc.output();
}

// To handle a GET request to /api
export async function GET() {

    const pdf = generatePdf();

    // const stream = pdf.pipe(blobStream());

    // stream.on('finish', () => {
    //     const blob = stream.toBlob('application.pdf');    })

    const headers = new Headers();
    headers.append('Content-Type', 'application.pdf');

    // Do whatever you want
    return new NextResponse(pdf, { headers })
}