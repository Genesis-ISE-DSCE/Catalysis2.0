import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import "./styles/rulebook.css";
import { useParams } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const RuleBook = () => {
    const { id } = useParams();
    const pdfFile = id;

    const [width, setWidth] = useState(window.innerWidth);
    const [numPages, setNumPages] = useState(null);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const getScale = () => {
        if (width > 786) {
            return 1.5;
        } else {
            return 0.6;
        }
    };

    const pageContainerStyle = {
        flexGrow: 1,
        zIndex: -1,
    };

    const renderPages = () => {
        const pages = [];
        for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
            pages.push(
                <div>
                    <Page
                        key={pageNumber}
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        scale={getScale()}
                    />
                    <br />
                </div>
            );
        }
        return pages;
    };

    return (
        <div className="resume bg-blu flex flex-col items-center justify-center" style={pageContainerStyle}>
            <div className="pt-28 pb-8" >
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                    {renderPages()}
                </Document>
            </div>
            <div className="pb-16">
                <a download target="_blank" rel="noreferrer" className="tagline hover:text-blue-400" href={pdfFile}>Download</a>
            </div>
        </div>
    );
};

export default RuleBook;
