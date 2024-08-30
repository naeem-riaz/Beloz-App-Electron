
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react';
import React from 'react';

interface ExtensionsEditModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ExtensionsEditModal: React.FC<ExtensionsEditModalProps> = ({ isOpen, onClose }) => {

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'xs'} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Extension</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="language" mb={2}>
                            <FormLabel>Extension</FormLabel>
                            <Input placeholder="100" />
                        </FormControl>

                        <FormControl id="language-group" mb={2}>
                            <FormLabel>Extension Holder</FormLabel>
                            <Input placeholder="Enter Language Group" />
                        </FormControl>

                        <FormControl id="call-rate" mb={2}>
                            <FormLabel>Holder Role</FormLabel>
                            <Input placeholder="Enter Language Group" />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button w={'100%'} colorScheme="blue" onClick={onClose}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ExtensionsEditModal;
