export interface Agent {
  data: [
    {
      uuid: string;
      displayName: string;
      description: string;
      developerName: string;
      characterTags: string[];
      displayIcon: string;
      displayIconSmall: string;
      bustPortrait: string;
      fullPortrait: string;
      fullPortraitV2: string;
      killfeedPortrait: string;
      background: string;
      assetPath: string;
      isFullPortraitRightFacing: boolean;
      isPlayableCharacter: boolean;
      isAvailableForTest: boolean;
      isBaseContent: boolean;
      role: {
        uuid: string;
        displayName: string;
        description: string;
        displayIcon: string;
        assetPath: string;
      };
      abilities: [
        {
          slot: string;
          displayName: string;
          description: string;
          displayIcon: string;
        },
      ];
      voiceLine: {
        minDuration: number;
        maxDuration: number;
        mediaList: [
          {
            id: number;
            wwise: string;
            wave: string;
          },
        ];
      };
    },
  ];
}

export interface Bundles {
  data: [
    {
      uuid: string;
      displayName: string;
      displayNameSubText: null;
      description: string;
      extraDescription: null;
      promoDescription: null;
      useAdditionalContext: boolean;
      displayIcon: string;
      displayIcon2: string;
      verticalPromoImage: string;
      assetPath: string;
    },
  ];
}

export interface Contracts {
  data: [
    {
      uuid: string;
      displayName: string;
      displayIcon: string;
      shipIt: boolean;
      freeRewardScheduleUuid: string;
      content: {
        relationType: string;
        relationUuid: string;
        chapters: [
          {
            isEpilogue: boolean;
            levels: [
              {
                reward: {
                  type: string;
                  uuid: string;
                  amount: 1;
                  isHighlighted: boolean;
                };
                xp: number;
                vpCost: number;
                isPurchasableWithVP: boolean;
              },
            ];
            freeRewards: null;
          },
        ];
        premiumRewardScheduleUuid: null;
        premiumVPCost: number;
      };
      assetPath: string;
    },
  ];
}

export interface Events {
  data: [
    {
      uuid: string;
      displayName: string;
      shortDisplayName: string;
      startTime: string;
      endTime: string;
      assetPath: string;
    },
  ];
}

export interface GameModes {
  data: [
    {
      uuid: string;
      displayName: string;
      duration: string;
      allowsMatchTimeouts: boolean;
      isTeamVoiceAllowed: boolean;
      isMinimapHidden: boolean;
      orbCount: number;
      teamRoles: string[];
      gameFeatureOverrides: [
        {
          featureName: string;
          state: boolean;
        },
      ];
      gameRuleBoolOverrides: [
        {
          ruleName: string;
          state: boolean;
        },
      ];
      displayIcon: string;
      assetPath: string;
    },
  ];
}
export interface Maps {
  data: [
    {
      uuid: string;
      displayName: string;
      coordinates: string;
      displayIcon: string;
      listViewIcon: string;
      splash: string;
      assetPath: string;
      mapUrl: string;
      xMultiplier: number;
      yMultiplier: number;
      xScalarToAdd: number;
      yScalarToAdd: number;
      callouts: [
        {
          regionName: string;
          superRegionName: string;
          location: {
            x: number;
            y: number;
          };
        },
      ];
    },
  ];
}

export interface PlayerCards {
  data: [
    {
      uuid: string;
      displayName: string;
      isHiddenIfNotOwned: boolean;
      themeUuid: string;
      displayIcon: string;
      smallArt: string;
      wideArt: string;
      largeArt: string;
      assetPath: string;
    },
  ];
}

export interface PlayerTitles {
  data: [
    {
      uuid: string;
      displayName: string;
      titleText: string;
      isHiddenIfNotOwned: boolean;
      assetPath: string;
    },
  ];
}

export interface Seasons {
  data: [
    {
      uuid: string;
      displayName: string;
      type: string;
      startTime: string;
      endTime: string;
      parentUuid: string;
      assetPath: string;
    },
  ];
}

export interface Sprays {
  data: [
    {
      uuid: string;
      displayName: string;
      category: string;
      themeUuid: string;
      displayIcon: string;
      fullIcon: string;
      fullTransparentIcon: string;
      animationPng: string;
      animationGif: string;
      assetPath: string;
      levels: [
        {
          uuid: string;
          sprayLevel: number;
          displayName: string;
          displayIcon: string;
          assetPath: string;
        },
      ];
    },
  ];
}
