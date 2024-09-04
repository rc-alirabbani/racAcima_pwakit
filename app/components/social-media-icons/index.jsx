import React from 'react';
import { IconButton, Box, HStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok  } from 'react-icons/fa';

const SocialMediaIcons = () => {
    return (
        <Box bg="#0f99d6" color="white">
            <Box mx="auto" maxW="600px">
                <HStack py={2} justifyContent="center">
                    <IconButton
                        as="a"
                        href="https://facebook.com"
                        aria-label="Facebook"
                        icon={<FaFacebook />}
                        size="lg"
                        mx={2}
                    />
                    <IconButton
                        as="a"
                        href="https://youtube.com"
                        aria-label="Youtube"
                        icon={<FaYoutube />}
                        size="lg"
                        mx={2}
                    />
                    <IconButton
                        as="a"
                        href="https://tiktok.com"
                        aria-label="Tiktok"
                        icon={<FaTiktok />}
                        size="lg"
                        mx={2}
                    />
                    <IconButton
                        as="a"
                        href="https://twitter.com"
                        aria-label="Twitter"
                        icon={<FaTwitter />}
                        size="lg"
                        mx={2}

                    />
                    <IconButton
                        as="a"
                        href="https://instagram.com"
                        aria-label="Instagram"
                        icon={<FaInstagram />}
                        size="lg"
                        mx={2}
                    />
                </HStack>
            </Box>
        </Box>
    )
}

export default SocialMediaIcons