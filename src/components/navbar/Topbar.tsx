import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineBell } from "react-icons/hi2";
import logo from '../../imgs/logo.png';

const Topbar: React.FC = () => {
    return (
        <Box bg="#588CD8" px={6} py={2}>
            <Flex align="center" justify="space-between">
                {/* Left Side - Logo */}
                <Image src={logo} alt="Logo" boxSize="150px" h="44px" />

                {/* Right Side - Notification and Admin Info */}
                <Flex align="center" gap={4}>
                    {/* Notification Bell */}
                    <IconButton
                        aria-label="Notifications"
                        icon={<HiOutlineBell size={24} />}
                        bg="white"
                        p={2}
                        borderRadius="lg"
                        _hover={{ bg: "white" }}
                        position="relative"
                    >
                        <Box
                            as="span"
                            position="absolute"
                            top="2"
                            right="2"
                            h="10px"
                            w="10px"
                            bg="red.600"
                            borderRadius="full"
                        />
                    </IconButton>

                    {/* Admin Info */}
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white" px={4} py={2} borderRadius="lg" _hover={{ bg: "white" }} _active={{ bg: "white" }}>
                            <Flex flexDirection="column" align="flex-start" textAlign="left">
                                <Text fontSize="sm" fontWeight="semibold" color="gray.600">
                                    Courtney Henry
                                </Text>
                                <Text fontSize="10px" color="gray.600">
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
            </Flex>
        </Box>
    );
};

export default Topbar;
