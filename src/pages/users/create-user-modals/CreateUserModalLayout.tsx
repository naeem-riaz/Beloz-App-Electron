
import { ChevronDownIcon, ViewIcon, ViewOffIcon, } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    GridItem,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Switch,
    Text
} from '@chakra-ui/react';
import React, { useState } from 'react';

interface CreateUserModalLayoutProps {
    isOpen: boolean;
    onClose: () => void;
    heading: string;
    buttonText: string;
    fields: {
        firstName?: boolean;
        lastName?: boolean;
        phone?: boolean;
        email?: boolean;
        gender?: boolean;
        extension?: boolean;
        language?: boolean;
        accessCode?: boolean;
        status?: boolean;
        interpretingSkills?: boolean;
        password?: boolean;
        confirmPassword?: boolean;
        type?: boolean;
    };
}

const CreateUserModalLayout: React.FC<CreateUserModalLayoutProps> = ({ heading, isOpen, onClose, fields, buttonText }) => {
    const formLabelStyle = {
        fontSize: '16px',
        fontWeight: '400',
        marginBottom: '4px'
    };

    const inputStyle = {
        fontSize: '14px',
        fontWeight: '400',
        borderColor: '#BDBDBD',
        _focusWithin: {
            borderColor: '#BDBDBD',
            boxShadow: 'none',
        },

    };

    const [status, setStatus] = useState<boolean>(true);
    const handleStatusChange = () => {
        setStatus(!status);
    };
    const [selectedAction, setSelectedAction] = useState('+92');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfromPassword, setShowConfromPassword] = useState<boolean>(false);

    const password = () => setShowPassword(!showPassword);
    const confromPassword = () => setShowConfromPassword(!showConfromPassword);
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={'md'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontSize={'24px'} fontWeight={700}>{heading}</ModalHeader>
                <ModalCloseButton _hover={{ bg: "none" }} />
                <ModalBody>
                    <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                        {fields.firstName && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel sx={formLabelStyle}>First Name</FormLabel>
                                    <Input sx={inputStyle} placeholder="First Name" />
                                </FormControl>
                            </GridItem>
                        )}
                        {fields.lastName && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel sx={formLabelStyle}>Last Name</FormLabel>
                                    <Input sx={inputStyle} placeholder="Last Name" />
                                </FormControl>
                            </GridItem>
                        )}
                        {fields.phone && (
                            <GridItem>
                                <FormLabel sx={formLabelStyle}>Phone Number</FormLabel>
                                <Flex border={'1px solid'} borderColor={'#BDBDBD'} rounded="md">
                                    <Menu>
                                        <MenuButton bg={'none'} as={Button} p={1} sx={inputStyle}>
                                            {selectedAction}
                                            <ChevronDownIcon boxSize={5} />
                                        </MenuButton>
                                        <MenuList sx={inputStyle}>
                                            <MenuItem sx={inputStyle} onClick={() => setSelectedAction('+92')}>+92</MenuItem>
                                            <MenuItem onClick={() => setSelectedAction('01')}>01</MenuItem>
                                            <MenuItem onClick={() => setSelectedAction('36')}>36</MenuItem>
                                        </MenuList>
                                    </Menu>
                                    <Input border={'none'} sx={inputStyle} placeholder="123456789" />
                                </Flex>
                            </GridItem>
                        )}
                        {fields.email && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel sx={formLabelStyle}>Email</FormLabel>
                                    <Input sx={inputStyle} placeholder="Email" />
                                </FormControl>
                            </GridItem>
                        )}
                        {fields.gender && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel sx={formLabelStyle}>Gender</FormLabel>
                                    <Select sx={inputStyle} placeholder='Gender'>
                                        <option value='option1'>Male</option>
                                        <option value='option2'>Female</option>
                                        <option value='option3'>Other</option>
                                    </Select>
                                </FormControl>
                            </GridItem>
                        )}
                        {fields.extension && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel sx={formLabelStyle}>Extension</FormLabel>
                                    <Input sx={inputStyle} placeholder="Extension" />
                                </FormControl>
                            </GridItem>
                        )}
                        {fields.language && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel sx={formLabelStyle}>Language</FormLabel>
                                    <Input sx={inputStyle} placeholder="Language" />
                                </FormControl>
                            </GridItem>
                        )}
                        {fields.accessCode && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel sx={formLabelStyle}>Access Code</FormLabel>
                                    <Input sx={inputStyle} placeholder="Access Code" />
                                </FormControl>
                            </GridItem>
                        )}
                        {fields.interpretingSkills && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel sx={formLabelStyle}>Interpreting Skills</FormLabel>
                                    <Select sx={inputStyle} placeholder='Interpreting Skills'>
                                        <option value='Medical Education'>Medical Education</option>
                                        <option value='Legal'>Legal</option>
                                        <option value='Social'>Social</option>
                                        <option value={'Industrial'}>Industrial</option>
                                        <option value={'Immigration'}>Immigration</option>
                                        <option value={'Labor & Delivery'}>Labor & Delivery</option>
                                        <option value={'any'}>Any</option>

                                    </Select>
                                </FormControl>
                            </GridItem>
                        )}
                        {fields.password && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel fontSize="16px" fontWeight="400" marginBottom="4px">Password</FormLabel>
                                    <InputGroup>
                                        <InputRightElement>
                                            <Button variant="link" onClick={password}>
                                                {showPassword ? <ViewIcon boxSize={5} color={'black'} /> : <ViewOffIcon boxSize={5} color={'black'} />}
                                            </Button>
                                        </InputRightElement>
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Password"
                                            fontSize="14px"
                                            fontWeight="400"
                                            borderColor="#BDBDBD"
                                        />
                                    </InputGroup>
                                </FormControl>
                            </GridItem>
                        )}
                        {fields.confirmPassword && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel sx={formLabelStyle}>Confrom Password</FormLabel>
                                    <InputGroup>
                                        <InputRightElement>
                                            <Button variant="link" onClick={confromPassword}>
                                                {showConfromPassword ? <ViewIcon boxSize={5} color={'black'} /> : <ViewOffIcon boxSize={5} color={'black'} />}
                                            </Button>
                                        </InputRightElement>
                                        <Input
                                            type={showConfromPassword ? 'text' : 'password'}
                                            placeholder="Confrom Password"
                                            fontSize="14px"
                                            fontWeight="400"
                                            borderColor="#BDBDBD"
                                        />
                                    </InputGroup>
                                </FormControl>
                            </GridItem>
                        )}
                        {fields.type && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel sx={formLabelStyle}>Type</FormLabel>
                                    <Select sx={inputStyle} placeholder='Type'>
                                        <option value='web Interpreter'>Web Interpreter</option>
                                        <option value='mobile Interpreter'>Mobile Interpreter</option>
                                    </Select>
                                </FormControl>
                            </GridItem>
                        )}
                        {fields.status && (
                            <GridItem>
                                <FormControl>
                                    <FormLabel sx={formLabelStyle}>Status</FormLabel>
                                    <Box border="1px" borderColor="#BDBDBD" borderRadius="md" p={2}>
                                        <FormControl display="flex" alignItems="center" justifyContent={'space-between'}>
                                            <Text fontSize={'14px'} fontWeight={'400'} mr={4}>{status ? 'Active' : 'Inactive'}</Text>
                                            <Switch isChecked={status} onChange={handleStatusChange} colorScheme="green" />
                                        </FormControl>
                                    </Box>
                                </FormControl>
                            </GridItem>
                        )}
                    </Grid>
                </ModalBody>
                <ModalFooter w={'100%'} gap={4} justifyContent={'space-between'}>
                    <Button
                        w={'100%'}
                        bg={'none'}
                        border={'1px solid'}
                        borderColor={'#BDBDBD'}
                        _hover={{ bg: "#588CD8", color: "white" }}
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button w={'100%'} bg={'#588CD8'} color="white" onClick={onClose}>
                        {buttonText}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CreateUserModalLayout;
