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
import { Card, CardBody } from '@chakra-ui/react'
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
 * @returns {React.ReactElement} - CategoryTile component.
 */
export const CategoryTile = ({text_subline, text_headline, image, text_alignment, alt}) => {
    const textHeading = text_headline
    const subHeading = text_subline
    const alignText = text_alignment

    return (
        <Box className={'category-tile'} w='100%' mx='auto' pt={8} px={4}>
            <Card className="cat-card-wrapper" maxW='auto' bg="gray.200">
                <CardBody>
                    <Link isExternal>
                        <figure className={'image-tile-figure'}>
                            <picture>
                                <source srcSet={image?.src?.tablet} media="(min-width: 48em)" />
                                <source srcSet={image?.src?.desktop} media="(min-width: 64em)" />
                                <Image
                                    boxSize='80%'
                                    mx='auto'
                                    objectFit='cover'
                                    className={'image-tile-image'}
                                    data-testid={'image-tile-image'}
                                    src={image?.src?.mobile ? image?.src?.mobile : image?.url}
                                    ignoreFallback={true}
                                    alt={image?.alt}
                                    title={image?.alt}
                                />
                            </picture>
                        </figure>
                        <Box textAlign={alignText} w='100%' p={4}>
                            {textHeading && (
                                <Text as='b' className={'cat-heading-text'} color={'black'}>
                                    <Box color={'black'}
                                        dangerouslySetInnerHTML={{
                                            __html: textHeading
                                        }}
                                    />
                                </Text>
                            )}

                            {subHeading && (
                                <Text as="span" className={'sub-heading-text'} color={'black'}>
                                    <Box color={'black'}
                                        dangerouslySetInnerHTML={{
                                            __html: subHeading
                                        }}
                                    />
                                </Text>
                            )}
                        </Box>
                    </Link>
                </CardBody>
            </Card>
        </Box>
    )
}

export default CategoryTile
