import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import jsPDF from 'jspdf'
import logo from './img-15.png'

export default class UserManual extends Component {

    pdfGenerate =() => {
        var doc = new jsPDF('landscape', 'px', 'a4', 'false')
        doc.addImage(logo, 'PNG',65,20,400,400)
        doc.addPage()
        doc.text(120,410, 'Name')
        doc.save('a.pdf')
        
    }
    render() {
       

        return (
            <div>
                <Button onClick = {this.pdfGenerate}>
                    Download PDF
                </Button>
            </div>
        )
    }
}
