/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Text,
    Link
} from '@salesforce/retail-react-app/app/components/shared/ui'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel
} from '@chakra-ui/react'

import { AddIcon, MinusIcon } from '@chakra-ui/icons';

/**
 * Static Content component
 *
 * @param {object} props
 * @param {string} - props.featureImage - Image Link.
 * @param {string} - props.moduleHeading - Text Below Image.
 * @param {image} - props.featureImage - Image.
 * @param {string} - props.featureDesc - Text Description.
 * @param {string} - props.assetCTATitle - Button Title.
 * @returns {React.ReactElement} - CollapsibleItem component.
 */
export const CollapsibleItem = ({
        accodionItem,
        accordionDetail
    }) => {

    //Text Width Image
    const accodion_Item = accodionItem
    const accordion_Detail = accordionDetail
    
    return (
        <Box className={'collapsible-item'} maxWidth='1200px' w='100%' mx='auto' px={4}>
            <Accordion allowToggle>
                <AccordionItem
                    borderTop="1px solid #ddd"
                    _last={{
                        borderBottom: 'none'
                    }}
                    p={2}
                    pr={0}
                >
                    {({ isExpanded }) => (
                        <>
                            <AccordionButton>
                                {accodion_Item && (
                                    <Box flex='1' textAlign='left' color="#0f99d6" fontWeight='medium' fontSize="16px"
                                        dangerouslySetInnerHTML={{
                                        __html: accodion_Item
                                        }}
                                    />
                                )}

                                {isExpanded ? (
                                    <MinusIcon width='14px' color="#0f99d6" />
                                ) : (
                                    <AddIcon width='14px' color="#0f99d6" />
                                )}
                            </AccordionButton>

                            <AccordionPanel px={8}>
                                {accordion_Detail && (
                                    <Text as="p" mb={4} className={'content-text'}
                                        dangerouslySetInnerHTML={{
                                            __html: accordion_Detail
                                        }}
                                    />
                                )}
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            </Accordion>
        </Box>
    )
}

export default CollapsibleItem
