import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import "./styles/resume.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const RuleBook = ( {pdfFile} ) => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getScale = () => {
        if (width > 786) {
        return 1.7;
        } else {
        return 0.6;
        }
    };

    const pageContainerStyle = {
        flexGrow: 1,
        zIndex: -1,
    };

    return (
        <div className="resume bg-blu flex flex-col items-center justify-center" style={pageContainerStyle}>
            <div className="pt-28 pb-8" >
                <Document file={pdfFile}>
                    <Page
                        pageNumber={1}
                        renderTextLayer={false}
                        scale={getScale()}
                    />
                    <br />
                    <Page
                        pageNumber={2}
                        renderTextLayer={false}
                        scale={getScale()}
                    />
                </Document>
            </div>
            <div className="pb-16">
                <a download target="_blank" rel="noreferrer" className="tagline hover:text-blue-400" href={pdfFile}>Download</a>
            </div>
        </div>
    );
};

export default RuleBook;
