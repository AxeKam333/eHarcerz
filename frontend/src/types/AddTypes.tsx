export type BadgesInfoValues = {
  badges: Array<any>;
  categories: Array<any>;
  specs: Array<any>;
  ranks: Array<any>;
};

export type ScoutsInfoValues = {
  patrols: 
    {
      id: number,
      name: string,
      leader: string
    }[]
  
  scouts: 
    {
      badges: Array<string>
      id: number
      name: string
      patrol: string
      rank: string
    }[]
  
}

export type FormValues = {
  radio: string;
  selectedRankId: any;
  selectedBadgesId: Array<any>;
  badgeFilters: {
    stars: Array<number> | undefined;
    spec: Array<string>;
    category: Array<string>;
  };
  selectedScoutsId: Array<any>;
  scoutFilters: {
    rank: Array<string>;
    patol: Array<string>;
  };
};
