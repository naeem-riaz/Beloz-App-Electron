



import { useState } from "react";
import PagesLayout from "../PagesLayout";
import WebAndmobileCustomerTable from "./WebAndmobileCustomerTable";

const WebCustomer: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const tableData = [
        {
            accessCode: 'Qw123985',
            customerName: 'John Doe',
        },
        {
            accessCode: 'Qa123986',
            customerName: 'Jane Smith',
        },
        {
            accessCode: 'Qc123987',
            customerName: 'Robert Johnson',
        },
        {
            accessCode: 'Q123988',
            customerName: 'Emily Davis',
        },
        {
            accessCode: 'Q123989',
            customerName: 'Michael Brown',
        },
    ];

    return (
        <>
            <PagesLayout
                headerTitle="Customer"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                tableArea={<WebAndmobileCustomerTable data={tableData} />}
            />
        </>
    )
};
export default WebCustomer;