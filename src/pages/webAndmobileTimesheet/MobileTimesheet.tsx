import { useState } from "react";
import PagesLayout from "../PagesLayout";
import WebAndMobileTimesheetTable from "./WebAndMobileTimesheetTable";

const MobileTimesheet: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const tableData = [
        {
            agentId: '123985',
            agentFullName: 'John Doe',
        },
        {
            agentId: '123986',
            agentFullName: 'Jane Smith',
        },
        {
            agentId: '123987',
            agentFullName: 'Robert Johnson',
        },
        {
            agentId: '123988',
            agentFullName: 'Emily Davis',
        },
        {
            agentId: '123989',
            agentFullName: 'Michael Brown',
        },
    ];

    return (
        <>
            <PagesLayout
                headerTitle="Time Sheet"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                tableArea={<WebAndMobileTimesheetTable data={tableData} />}
            />
        </>
    )
};
export default MobileTimesheet;