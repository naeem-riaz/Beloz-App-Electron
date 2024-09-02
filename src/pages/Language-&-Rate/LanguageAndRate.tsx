import { Button, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import PagesLayout from '../PagesLayout';
import LanguageAndRateTable from './LanguageAndRateTable';
import AddNewLanguageModal from './LanguageAndRateModals/AddNewLanguageModal';

const LanguageAndRate: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const {
    isOpen: isPriceEditModalOpen,
    onOpen: onPriceEditModalOpen,
    onClose: onPriceEditModalClose
  } = useDisclosure();

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
        <Button
          color="white"
          bg="#588CD8"
          _hover={{ bg: "#588CD8" }}
          onClick={onPriceEditModalOpen}
        >
          Add New Language
        </Button>
      </PagesLayout >
      <AddNewLanguageModal
        isOpen={isPriceEditModalOpen}
        onClose={onPriceEditModalClose}
      />
    </>
  )
}

export default LanguageAndRate;
