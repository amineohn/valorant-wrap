export type Example = {
  name: string;
};

export interface Agent {
  data: [
    {
      uuid: string;
      displayName: string;
      description: string;
      developerName: string;
      characterTags: null;
      displayIcon: string;
      displayIconSmall: string;
      bustPortrait: string;
      fullPortrait: string;
      fullPortraitV2: string;
      killfeedPortrait: string;
      background: string;
      assetPath: string;
      isFullPortraitRightFacing: false;
      isPlayableCharacter: true;
      isAvailableForTest: true;
      isBaseContent: false;
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
      useAdditionalContext: false;
      displayIcon: string;
      displayIcon2: string;
      verticalPromoImage: string;
      assetPath: string;
    },
  ];
}
