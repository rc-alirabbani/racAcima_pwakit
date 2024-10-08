/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export default {
    baseStyle: () => ({
        container: {
            position: 'relative'
        },
        favIcon: {
            position: 'absolute',
            variant: 'unstyled',
            top: 2,
            right: 2
        },
        imageWrapper: {
            position: 'relative',
            marginBottom: 2
        },
        image: {
            ratio: 1,
            paddingBottom: 2
        },
        link: {
            display: 'block'
        },
        price: {},
        title: {
            fontWeight: 600
        },
        rating: {},
        variations: {},
        badgeGroup: {
            position: 'absolute',
            top: 2,
            left: 2
        }
    }),
    parts: [
        'container',
        'imageWrapper',
        'image',
        'price',
        'title',
        'rating',
        'variations',
        'badgeGroup'
    ]
}
