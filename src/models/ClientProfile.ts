export type ClientProfile = {
    clientId?: number;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    authenticationType?: authenticationType;
    homePracticeId?: number;
    homePracticeName?: string | null;
    homePracticePhone?: string | null;
    isActivated?: boolean;
    requireContactPreferencesUpdate?: boolean;
};

export enum authenticationType {
    USERNAME_PASSWORD = 'UsernamePassword',
    SOCIAL_CONNECTION = 'SocialConnection',
}
