import React, { Component } from 'react';

export default class Table extends Component {

    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Status</th>
                        <th>Created</th>
                        <th>Processing Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                { this.props.reports.map(report => {
                      return (<tr key={report.id}>
                           <td>{report.customer}</td>
                           <td>{report.status}</td>
                           <td>{report.created}</td>
                           <td>{report.processingStatus}</td>
                           <td>{report.actions}</td>
                       </tr>)
                   }) }
                </tbody>
            </table>
        )
    }
}