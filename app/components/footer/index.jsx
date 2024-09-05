import React, { useState, useEffect } from 'react';
import { Box, Text, VStack, Button, Link, SimpleGrid } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import {usePage} from '@salesforce/commerce-sdk-react'
import {Page} from '@salesforce/commerce-sdk-react/components'

import { CollapsibleItem } from '../../page-designer/assets'
import { CollapsibleLayout } from '../../page-designer/layouts'
import SocialMediaIcons  from '../social-media-icons'

const PAGEDESIGNER_TO_COMPONENT = {
    'pd_assets.pdPlusAccordion': CollapsibleItem,
    'pd_layouts.pdPlusAccordionLayout': CollapsibleLayout
}

const Footer = () => {
    
    const {data: page, error} = usePage({parameters: {pageId: 'footer'}})
    const [renderedComponents, setRenderedComponents] = useState(null);

    // Log to inspect the structure of the page data
    useEffect(() => {
        if (page) {
            setRenderedComponents(renderSpecificComponents(page));
        }
    }, [page]);

    // Function to render specific components
    const renderSpecificComponents = (page) => {
        if (!page || !page.regions) return null;

        // Safety checks for regions and components
        return page.regions.map((region) => {
            if (!region.components || !Array.isArray(region.components)) return null;
            
            return region.components.map((component) => {
                const Component = PAGEDESIGNER_TO_COMPONENT[component.typeId];
                return Component ? <Component key={component.id} {...component} /> : null;
            });
        });
    };

    return (
        <>
            <SocialMediaIcons/>

            <Box as="footer" color="#0f99d6" py={4} mt={2}  mx="auto" maxW="1200px" width="100%">
                <Box mx="auto" textAlign="center" width="100%" pb={8}>
                    <Button bg="#8dc63f" color="#fff" fontWeight="medium">START YOUR ORDER </Button>
                </Box>
                
                <VStack width="100%" px={4}>
                    <Box width="100%">
                        <Link 
                            color="#0f99d6" 
                            fontSize="16px"
                            fontWeight="medium"
                            display="flex" 
                            alignItems="center" 
                            justify="space-between"
                            px={2}
                            py={4}
                            borderTop="1px solid #ddd"
                        >
                            <Text flex="1">Store Locator</Text>
                            <ChevronRightIcon fontWeight="bold"/>
                        </Link>

                        <Link 
                            color="#0f99d6" 
                            fontSize="16px"
                            fontWeight="medium" 
                            display="flex" 
                            alignItems="center" 
                            justify="space-between"
                            px={2}
                            py={4}
                            borderTop="1px solid #ddd"
                        >
                            <Text flex="1">Careers</Text>
                            <ChevronRightIcon  fontWeight="bold"/>
                        </Link>
                    </Box>
                </VStack>

                <Page page={page} components={PAGEDESIGNER_TO_COMPONENT} />
            </Box>
        </>
    );
};

export default Footer