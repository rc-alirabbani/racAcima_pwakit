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
    Image,
    Link as ChakraLink,
    Text,
    Heading,
    HStack,
    VStack
} from '@salesforce/retail-react-app/app/components/shared/ui'
import { Card, CardBody } from '@chakra-ui/react'
import Link from '@salesforce/retail-react-app/app/components/link'
import {isAbsoluteURL} from '@salesforce/retail-react-app/app/page-designer/utils'

/**
 * Static Content component
 *
 * @param {object} props
 * @param {string} - props.featureImage - Image Link.
 * @param {string} - props.moduleHeading - Text Below Image.
 * @param {image} - props.featureImage - Image.
 * @param {string} - props.featureDesc - Text Description.
 * @param {string} - props.assetCTATitle - Button Title.
 * @returns {React.ReactElement} - TextWithImage component.
 */
export const TextWithImage = ({
        headingText,
        richText,
        buttonText,
        tileLink,
        imgFile,
        imgAlt
    }) => {

    //Text Width Image
    const heading_Text = headingText
    const richText_content = richText
    const btn_Text = buttonText
    const tile_Link = tileLink
    const image_File = imgFile
    const image_Alt = imgAlt

    return (
        <Box className={'text-image-container'} w='100%' mx='auto' pt={8} px={4}>
            <HStack 
                spacing={4} 
                align="center" 
                p={4} 
                border="1px" 
                borderColor="gray.200" 
                borderRadius="md" 
                boxShadow="md"
            >
                <Image
                    boxSize='50%'
                    mx='auto'
                    objectFit='contain'
                    className={'image-tile-image'}
                    data-testid={'image-tile-image'}
                    src={image_File?.src?.mobile ? image_File?.src?.mobile : image_File?.url}
                    ignoreFallback={true}
                    alt={image_File?.image_Alt}
                    title={image_File?.image_Alt}
                />

                <Box boxSize='50%' p={10}>
                    {heading_Text && (
                        <Heading as="h1" className={'heading-text'} mb={4}>
                            <Box
                                dangerouslySetInnerHTML={{
                                __html: heading_Text
                                }}
                            />
                        </Heading>
                    )}
                    
                    {richText_content && (
                        <Text as="p" mb={4} className={'content-text'}
                            dangerouslySetInnerHTML={{
                                __html: richText_content
                            }}
                        />
                    )}

                    <Link className="assetBtn-block" href={tile_Link} title={btn_Text} isExternal>
                        {btn_Text}
                    </Link>
                </Box>
            </HStack>
        </Box>
    )
}

export default TextWithImage
