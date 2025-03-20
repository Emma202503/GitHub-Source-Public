function openPdf(pdfId) {
    let pdfUrls = {
        'pdf1': 'path/to/pdf1.pdf',
        'pdf2': 'path/to/pdf2.pdf',
        'pdf3': 'path/to/pdf3.pdf'
    };

    window.open(pdfUrls[pdfId], '_blank');
}