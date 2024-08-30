
import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import PagesLayout from '../PagesLayout';
import ExtensionsTable from './ExtensionsTable';

const Extensions: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const tableData = [
        {
            agentName: 'John Doe',
            role: 'Support Agent',
            extension: '101'
        },
        {
            agentName: 'Jane Smith',
            role: 'Sales Manager',
            extension: '102'
        },
        {
            agentName: 'Alice Johnson',
            role: 'Customer Service',
            extension: '103'
        },
        {
            agentName: 'Bob Brown',
            role: 'Technical Specialist',
            extension: '104'
        },
        {
            agentName: 'Charlie Davis',
            role: 'HR Manager',
            extension: '105'
        },
        {
            agentName: 'Emily Clark',
            role: 'Operations Manager',
            extension: '106'
        }
    ];

    return (
        <>
            <PagesLayout
                headerTitle="Extension"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                tableArea={<ExtensionsTable data={tableData} />}
            >
                <Flex alignItems={'center'} gap={2}>
                    <Text fontSize="14px" fontWeight="bold">
                        Phone number
                    </Text>
                    <Text fontSize="md" px={3} py={2} color="black" border={'1px solid'} borderColor={'#BDBDBD'} rounded={'6px'}>
                        +1 (855) 288 5432
                    </Text>
                </Flex>


            </PagesLayout >
            );
        </>
    )
}

export default Extensions;
