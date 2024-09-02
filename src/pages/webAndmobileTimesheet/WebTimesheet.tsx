
import { useState } from "react";
import PagesLayout from "../PagesLayout";
import WebAndMobileTimesheetTable from "./WebAndMobileTimesheetTable";

const WebTimesheet: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const tableData = [
        {
            agentId: 'w123985',
            agentFullName: 'John Doe',
        },
        {
            agentId: 'a123986',
            agentFullName: 'Jane Smith',
        },
        {
            agentId: 'c123987',
            agentFullName: 'Robert Johnson',
        },
        {
            agentId: 't123988',
            agentFullName: 'Emily Davis',
        },
        {
            agentId: 'n123989',
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
export default WebTimesheet;