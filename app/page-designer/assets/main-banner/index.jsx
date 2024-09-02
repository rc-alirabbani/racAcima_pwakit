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
import Link from '@salesforce/retail-react-app/app/components/link'
import {isAbsoluteURL} from '@salesforce/retail-react-app/app/page-designer/utils'

/**
 * Editorial rich text component
 *
 * @param {object} props
 * @param {string} - props.ITCText - Rich Text Content.
 * @returns {React.ReactElement} - MainBanner component.
 */
export const MainBanner = ({categoryLink, image, heading}) => {
    // console.log(props);

    const hasCaption = heading
    const isAbsolute = isAbsoluteURL(categoryLink)
    const LinkWrapper = isAbsolute ? ChakraLink : Link
    const linkProps = isAbsolute ? {href: categoryLink} : {to: categoryLink}


    return (
        <Box className={'main-banner-wrapper'}>
            <Box
                as="figure"
                className={'main-banner'}
                position={'relative'}
                margin={0}
                width={'100%'}
            >
                <picture>
                    <source srcSet={image?.src?.tablet} media="(min-width: 48em)" />
                    <source srcSet={image?.src?.desktop} media="(min-width: 64em)" />
                    <LinkWrapper {...linkProps} isExternal>
                        <Image
                            className={'image'}
                            data-testid={'main-banner-caption'}
                            src={image?.src?.mobile ? image?.src?.mobile : image?.url}
                            ignoreFallback={true}
                            alt={image?.alt}
                            title={image?.alt}
                            filter={'brightness(40%)'}
                        />
                    </LinkWrapper>
                </picture>

                {hasCaption && (
                    <Text as="figcaption">
                        {heading && (
                            <Box
                                className={'banner-heading-container'}
                                position={'absolute'}
                                top={'50%'}
                                width={'100%'}
                                padding={'15px'}
                                textAlign={{base: 'center', sm: 'left'}}
                            >
                                <Text
                                    className={'banner-heading-text'}
                                    color={'white'}
                                >
                                    {/* The `dangerouslySetInnerHTML` is safe to use in this context. */}
                                    {/* The HTML in the response from Page Designer API is already sanitized. */}
                                    <Box
                                        color={'white'}
                                        dangerouslySetInnerHTML={{
                                            __html: heading
                                        }}
                                        sx={{
                                            ['h1, h2, h3, h4, h5, h6']: {
                                                fontSize: 'revert',
                                                fontWeight: 'revert',
                                                textAlign: 'center',
                                            },
                                            p: {
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            },
                                            span: {
                                                color: 'white'
                                            }
                                        }}
                                    />
                                </Text>
                            </Box>
                        )}
                    </Text>
                )}
            </Box>
        </Box>
    )
}

export default MainBanner
