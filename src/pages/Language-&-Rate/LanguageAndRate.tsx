import { Flex } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import PagesLayout from '../PagesLayout';
import { useState } from 'react';
import LanguageAndRateTable from './LanguageAndRateTable';

const LanguageAndRate: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const tableData = [
    {
      language: "English",
      languageGroup: "Western",
      normalCallRate: "$0.05",
      emergencyCallRate: "$0.10",
      status: "Active"
    },
    {
      language: "Spanish",
      languageGroup: "Western",
      normalCallRate: "$0.04",
      emergencyCallRate: "$0.08",
      status: "Active"
    },
    {
      language: "French",
      languageGroup: "European",
      normalCallRate: "$0.06",
      emergencyCallRate: "$0.12",
      status: "Inactive"
    },
    {
      language: "German",
      languageGroup: "European",
      normalCallRate: "$0.07",
      emergencyCallRate: "$0.14",
      status: "Active"
    },
    {
      language: "Chinese",
      languageGroup: "Asian",
      normalCallRate: "$0.08",
      emergencyCallRate: "$0.16",
      status: "Inactive"
    }
  ];

  return (
    <>
      <PagesLayout
        headerTitle="Language & Rate"
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        tableArea={<LanguageAndRateTable data={tableData} />}
      >
        <Flex>

        </Flex>


      </PagesLayout >
      );
    </>
  )
}

export default LanguageAndRate;
