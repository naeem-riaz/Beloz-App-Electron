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
    ModalOverlay,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from '@chakra-ui/react';
import React from 'react';

interface PriceEditModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PriceEditModal: React.FC<PriceEditModalProps> = ({ isOpen, onClose }) => {

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'xs'} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Language Settings</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="language" mb={2}>
                            <FormLabel>Language</FormLabel>
                            <Input placeholder="Enter Language" />
                        </FormControl>

                        <FormControl id="language-group" mb={2}>
                            <FormLabel>Language Group</FormLabel>
                            <Input placeholder="Enter Language Group" />
                        </FormControl>

                        <FormControl id="call-rate" mb={2}>
                            <FormLabel>Call Rate (per minute)</FormLabel>
                            <NumberInput>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl id="emergency-call-rate">
                            <FormLabel>Emergency Call Rate (per minute)</FormLabel>
                            <NumberInput>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
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

export default PriceEditModal;
