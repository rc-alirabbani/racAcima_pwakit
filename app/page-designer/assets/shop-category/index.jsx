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
    Text
} from '@salesforce/retail-react-app/app/components/shared/ui'
import { getAppOrigin } from '@salesforce/pwa-kit-react-sdk/utils/url'
import Link from '@salesforce/retail-react-app/app/components/link'

/**
 * Image with text component
 *
 * @param {object} props
 * @param {string} - props.category - Image Link.
 * @param {string} - props.text_headline - Text Below Image.
 * @param {image} - props.image - Image.
 * @param {string} - props.heading - text_subline.
 * @param {string} - props.alt - The image alt text shown by the component.
 * @returns {React.ReactElement} - ShopCategory component.
 */
export const ShopCategory = ({catDisplayName, category, image}) => {
    const textHeading = catDisplayName
    const catLink = category

    return (
        <>
            <Box className={'shop-by-tile'} w="100%" mx='auto' py={4} px={2} textAlign="center">
                <Link href={`/category/${catLink}`} display="inline-block">
                    <Box className={'image-tile-figure'} 
                        borderRadius="full" 
                        boxSize={{ base: "100px", sm: "150px", md: "200px" }}
                        bg="rgba(17,153,215,0.1)"
                        objectFit="cover"
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                        justifyContent="center"
                    >
                        <picture>
                            <source srcSet={image?.src?.tablet} media="(min-width: 48em)" />
                            <source srcSet={image?.src?.desktop} media="(min-width: 64em)" />
                            <Image
                                boxSize={{ base: "90%", sm: "70%", md: "85%" }}
                                mx='auto'
                                objectFit='contain'
                                className={'image-tile-image'}
                                data-testid={'image-tile-image'}
                                src={image?.src?.mobile ? image?.src?.mobile : image?.url}
                                ignoreFallback={true}
                                alt={image?.alt}
                                title={image?.alt}
                            />
                        </picture>
                    </Box>
                    <Box w='100%' p={4}>
                        {textHeading && (
                            <Text as='b' className={'cat-heading-text'} color={'black'}>
                                <Box color={'black'}
                                    dangerouslySetInnerHTML={{
                                        __html: textHeading
                                    }}
                                />
                            </Text>
                        )}
                    </Box>
                </Link>
            </Box>
        </>
    )
}

export default ShopCategory
