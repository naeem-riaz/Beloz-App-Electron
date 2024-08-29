import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    Heading,
    IconButton
} from '@chakra-ui/react';
import React from 'react';



interface PagesLayoutProps {
    headerTitle: string;
    children?: React.ReactNode;
    currentPage: number;
    totalPages: number;
    tableArea?: React.ReactNode;
    onPageChange: (page: number) => void;
}

const PagesLayout: React.FC<PagesLayoutProps> = ({
    headerTitle,
    children,
    currentPage,
    totalPages,
    tableArea,
    onPageChange
}) => {
    return (
        <Box py={4} bg="white" w="100%" h="100%" rounded="8px" position="relative">
            {/* Header */}
            <Flex px={4} justifyContent="space-between">
                <Heading as="h2" size="lg" color="#1A2A41">
                    {headerTitle}
                </Heading>
                {children}
            </Flex>
            <Box overflowX="auto" mt={'30px'}>
                {tableArea}
            </Box>

            {/* Footer with Pagination */}
            <Box px={4} display="flex" justifyContent="center" position="absolute" bottom={4} right={3}>
                <IconButton
                    aria-label="Previous page"
                    icon={<ChevronLeftIcon />}
                    onClick={() => onPageChange(currentPage - 1)}
                    isDisabled={currentPage === 1}
                    color="#588CD8"
                    bg="none"
                    border="1px solid"
                    borderColor="#EEF4FB"
                />
                {[...Array(totalPages)].map((_, index) => (
                    <Button
                        key={index}
                        mx={2}
                        onClick={() => onPageChange(index + 1)}
                        isActive={index + 1 === currentPage}
                        bg="none"
                        border="1px solid"
                        borderColor="#EEF4FB"
                        textColor="#588CD8"
                        _active={{ textColor: "white", bg: "#588CD8" }}
                    >
                        {index + 1}
                    </Button>
                ))}
                <IconButton
                    aria-label="Next page"
                    icon={<ChevronRightIcon />}
                    onClick={() => onPageChange(currentPage + 1)}
                    isDisabled={currentPage === totalPages}
                    color="#588CD8"
                    bg="none"
                    border="1px solid"
                    borderColor="#EEF4FB"
                />
            </Box>
        </Box>
    );
};

export default PagesLayout;
