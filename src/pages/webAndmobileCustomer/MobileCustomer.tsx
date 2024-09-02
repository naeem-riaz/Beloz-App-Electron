
import { useState } from "react";
import PagesLayout from "../PagesLayout";
import WebAndmobileCustomerTable from "./WebAndmobileCustomerTable";

const MobileCustomer: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const tableData = [
        {
            accessCode: 'w123985',
            customerName: 'John Doe',
        },
        {
            accessCode: 'a123986',
            customerName: 'Jane Smith',
        },
        {
            accessCode: 'c123987',
            customerName: 'Robert Johnson',
        },
        {
            accessCode: 't123988',
            customerName: 'Emily Davis',
        },
        {
            accessCode: 'n123989',
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
export default MobileCustomer;