import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../../imgs/logo.png';

const Topbar: React.FC = () => {
    return (
        <Box bg="#588CD8" px={6} py={2}>
            <Flex align="center" justify="space-between">
                <Image src={logo} alt="Logo" boxSize="171px" h="45px" />
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white" p={4} borderRadius="lg" _hover={{ bg: "white" }} _active={{ bg: "white" }}>
                        <Flex flexDirection="column" align="flex-start" textAlign="left" gap={'2px'}>
                            <Text fontSize="sm" fontWeight="semibold" color="#1A2A41">
                                Courtney Henry
                            </Text>
                            <Text fontSize="10px" color="#1A2A41">
                                Admin
                            </Text>
                        </Flex>
                    </MenuButton>
                    <MenuList>
                        <MenuItem textAlign={'center'}>
                            Logout
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Box>
    );
};

export default Topbar;
