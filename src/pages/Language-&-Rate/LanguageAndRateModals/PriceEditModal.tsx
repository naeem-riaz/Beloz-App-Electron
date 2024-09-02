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
                    <ModalHeader>Edit Language</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl id="language" mb={2}>
                            <FormLabel fontSize={'14px'}>Language</FormLabel>
                            <Input placeholder="Enter Language" />
                        </FormControl>

                        <FormControl id="language-group" mb={2}>
                            <FormLabel fontSize={'14px'}>Language Group</FormLabel>
                            <Input placeholder="Enter Language Group" />
                        </FormControl>

                        <FormControl id="call-rate" mb={2}>
                            <FormLabel fontSize={'14px'}>Call Rate (per minute)</FormLabel>
                            <NumberInput>
                                <NumberInputField placeholder="10$" />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>

                        <FormControl id="emergency-call-rate">
                            <FormLabel fontSize={'14px'}>Emergency Call Rate (per minute)</FormLabel>
                            <NumberInput>
                                <NumberInputField placeholder="10$" />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                        </FormControl>


                    </ModalBody>

                    <ModalFooter>
                        <Button w={'100%'} bg={'#588CD8'} color={'white'} _hover={{ bg: "#588CD8" }} onClick={onClose}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PriceEditModal;
