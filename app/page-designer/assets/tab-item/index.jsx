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
    Text
} from '@salesforce/retail-react-app/app/components/shared/ui'

import {
    Tabs ,
    Tab,
    TabList,
    TabPanels,
    TabIndicator,
    TabPanel
} from '@chakra-ui/react'

/**
 * Tabs Content component
 *
 * @param {object} props
 * @param {string} - props.featureImage - Image Link.
 * @param {string} - props.moduleHeading - Text Below Image.
 * @param {image} - props.featureImage - Image.
 * @param {string} - props.featureDesc - Text Description.
 * @param {string} - props.assetCTATitle - Button Title.
 * @returns {React.ReactElement} - TabItem component.
 */
export const TabsItem = ({
        tabTitle,
        tabDescription
    }) => {

    //Tabs Component
    const tab_Title = tabTitle
    const tab_Description = tabDescription

    return (
        <Box className={'collapsible-item'} maxWidth='1200px' w='100%' mx='auto' px={4}>
            <Tabs position='relative' variant='unstyled'>
                <TabList>
                    <Tab>
                        {tab_Title && (
                            <Box flex='1' textAlign='left' color="#0f99d6" fontWeight='medium' fontSize="16px"
                                dangerouslySetInnerHTML={{
                                __html: tab_Title
                                }}
                            />
                        )}
                    </Tab>
                </TabList>
                <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                <TabPanels>
                    <TabPanel>
                        {tab_Description && (
                            <Text as="p" mb={4} className={'content-text'}
                                dangerouslySetInnerHTML={{
                                    __html: tab_Description
                                }}
                            />
                        )}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default TabsItem
