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
 * @returns {React.ReactElement} - StaticContent component.
 */
export const StaticContent = ({
        featureIcon,
        iconAlt,
        featureHeading,
        featureDesc,
        moduleBannerImage,
        moduleImgAlt,
        moduleTitle,
        moduleDesc,
        featureImage,
        moduleHeading,
        featureContentDesc, 
        assetCTALabel,
        assetCTATitle, 
        assetCTAURL
    }) => {

    //Banner Caption Holder
    const feature_Icon = featureIcon
    const icon_Alt = iconAlt
    const feature_Heading = featureHeading
    const feature_Description = featureDesc

    //Banner Caption Holder
    const module_BannerImage = moduleBannerImage
    const module_ImgAlt = moduleImgAlt
    const module_Title = moduleTitle
    const module_Desc = moduleDesc
    
    // Stacked content
    const feature_Image = featureImage
    const module_Heading = moduleHeading
    const feature_Desc = featureContentDesc
    const assetCTA_Label = assetCTALabel
    const assetCTA_Title =  assetCTATitle
    const assetCTA_URL = assetCTAURL
    
    const urlParts = assetCTA_URL.split('/'); // Split by '/'
    const dynamicLink = urlParts[urlParts.length - 1]; // Get the last segment

    return (
        <Box className={'static-content-container'} w='100%' mx='auto' pt={8} px={4}>
            <Box className={'static-content-holder'} mb={8}>
                    <figure className={'image-tile-figure'}>
                        <picture>
                            <source srcSet={feature_Image?.src?.tablet} media="(min-width: 48em)" />
                            <source srcSet={feature_Image?.src?.desktop} media="(min-width: 64em)" />
                            <Image
                                boxSize='80%'
                                mx='auto'
                                objectFit='cover'
                                className={'image-tile-image'}
                                data-testid={'image-tile-image'}
                                src={feature_Image?.src?.mobile ? feature_Image?.src?.mobile : feature_Image?.url}
                                ignoreFallback={true}
                                alt={feature_Image?.alt}
                                title={feature_Image?.alt}
                            />
                        </picture>
                    </figure>

                    {moduleHeading && (
                        <Heading  as='h1' mb={4} className={'content-heading-text'} color={'black'}>
                            <Box color={'black'}
                                dangerouslySetInnerHTML={{
                                    __html: moduleHeading
                                }}
                            />
                        </Heading>
                    )}

                    {feature_Desc && (
                        <Text  as='p' className={'content-decription'} color={'black'} mb={4}>
                            <Box color={'black'}
                                dangerouslySetInnerHTML={{
                                    __html: feature_Desc
                                }}
                            />
                        </Text>
                    )}

                    <Link className="assetBtn-block" href={dynamicLink} title={assetCTA_Title} isExternal>
                        {assetCTA_Title}
                    </Link>
            </Box>

            <Box className={'static-banner-holder'} position="relative" zIndex="2">
                <figure className={'image-tile-figure'}>
                    <picture>
                        <source srcSet={module_BannerImage?.src?.tablet} media="(min-width: 48em)" />
                        <source srcSet={module_BannerImage?.src?.desktop} media="(min-width: 64em)" />
                        <Image
                            boxSize='100%'
                            mx='auto'
                            objectFit='cover'
                            className={'image-tile-image'}
                            data-testid={'image-tile-image'}
                            src={module_BannerImage?.src?.mobile ? module_BannerImage?.src?.mobile : module_BannerImage?.url}
                            ignoreFallback={true}
                            alt={module_BannerImage?.alt}
                            title={module_BannerImage?.alt}
                        />
                    </picture>

                    <Text as="figcaption">
                        <Box
                            className={'image-with-text-heading-container'}
                            position={'absolute'}
                            top={'50%'}
                            right={0}
                            left={0}
                            transform={'translateY(-50%)'}
                            width={'100%'}
                            height={'100%'}
                            padding={'15px'}
                            backgroundColor={'rgba(0, 0, 0, 0.5)'}
                            textAlign={{base: 'center', sm: 'center'}}
                        >
                            <VStack spacing={4} align='center' height='100%' maxW='80%' p={4} mx='auto' >
                                {module_Title && (
                                    <Heading as="h1" className={'heading-text'}>
                                        <Box color={'white'}
                                            dangerouslySetInnerHTML={{
                                            __html: moduleHeading
                                        }}
                                        />
                                    </Heading>
                                )}
                                
                                {module_Title && (
                                    <Text as="p" className={'content-text'} color={'white'}
                                        dangerouslySetInnerHTML={{
                                            __html: module_Desc
                                        }}

                                        sx={{
                                            p: {
                                                color: 'white'
                                            },
                                            span: {
                                                color: 'white'
                                            }
                                        }}
                                    />
                                )}
                            </VStack>
                        </Box>
                    </Text>
                </figure>
            </Box>

            <HStack spacing={4} align="start" p={4} border="1px" borderColor="gray.200" borderRadius="md" boxShadow="md">
                <Image
                    boxSize='80px'
                    mx='auto'
                    objectFit='contain'
                    className={'image-tile-icon'}
                    data-testid={'image-tile-icon'}
                    src={feature_Icon?.src?.mobile ? feature_Icon?.src?.mobile : feature_Icon?.url}
                    ignoreFallback={true}
                    alt={feature_Icon?.alt}
                    title={feature_Icon?.alt}
                />

                <Box>
                    {feature_Heading && (
                        <Heading as="h1" className={'heading-text'} mb={4}>
                            <Box
                                dangerouslySetInnerHTML={{
                                __html: feature_Heading
                                }}
                            />
                        </Heading>
                    )}
                    
                    {feature_Description && (
                        <Text as="p" className={'content-text'}
                            dangerouslySetInnerHTML={{
                                __html: feature_Description
                            }}
                        />
                    )}
                </Box>
            </HStack>
        </Box>
    )
}

export default StaticContent
