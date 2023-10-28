export type BadgesInfoValues = {
  badges: Array<any>;
  categories: Array<any>;
  specs: Array<any>;
  ranks: Array<any>;
};

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
