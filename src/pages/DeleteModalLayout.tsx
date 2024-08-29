import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Button, Text } from '@chakra-ui/react';

interface DeleteModalLayoutProps {
    isOpen: boolean;
    onClose: () => void;
    heading: string;
    subheading: string;
    buttonText: string;
}

const DeleteModalLayout: React.FC<DeleteModalLayoutProps> = ({ isOpen, onClose, heading, subheading, buttonText, }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'xs'} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text textAlign={'center'} fontSize="lg" fontWeight="bold">{heading}</Text>
                    <Text fontSize="sm" >{subheading}</Text>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody display={'flex'} gap={4}>
                    <Button colorScheme="red" w={'100%'}>
                        {buttonText}
                    </Button>
                    <Button
                        onClick={onClose}
                        w="100%"
                        border="1px solid"
                        borderColor="#BDBDBD"
                        borderRadius="4px"
                        bg="white"
                        _hover={{ bg: "white" }}
                    >
                        Cancel
                    </Button>

                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default DeleteModalLayout;
