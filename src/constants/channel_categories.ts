// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {CategorySorting, ChannelCategoryType} from 'types/channel_categories';
import {Dictionary} from 'types/utilities';

export const CategoryTypes: {[name: string]: ChannelCategoryType} = { // TODO update values to match the ones provided by the server
    FAVORITES: 'favorites',
    CHANNELS: 'channels',
    DIRECT_MESSAGES: 'direct_messages',
    CUSTOM: 'custom',
};
