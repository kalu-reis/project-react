import React, { Component } from 'react';
import Header from '../../component/header'
import Aside from '../../component/aside'
import Table from '../../component/table'

export default class Report extends Component {
    render() {
        const reports = [{
            id: 1234,
            customer: '000345634',
            status: 'OPEN',
            created: '25-06-2019',
            processingStatus:'FINISHED',
            actions:'-----'
        },

        {
            id: 1233,
            customer: '000345634',
            status: 'OPEN',
            created: '25-06-2019',
            processingStatus:'FINISHED',
            actions:'-----'
        },

        {
            id: 122345,
            customer: '000345634',
            status: 'OPEN',
            created: '25-06-2019',
            processingStatus:'FINISHED',
            actions:'-----'
        },
        {
            id: 1234333,
            customer: '000345634',
            status: 'OPEN',
            created: '25-06-2019',
            processingStatus:'FINISHED',
            actions:'-----'
        }


        ]

        return (
            <main>
                <Header />
                <Aside />
                <Table reports={reports} />
            </main>
        )
    }
}