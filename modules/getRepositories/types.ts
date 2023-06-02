export interface RepoType {
    items?: {
        fields: {
            link: string;
            title: string;
            techStack: string[];
            image: {
                fields: {
                    file: {
                        url: string;
                    };
                };
            };
            description: {
                content: {
                    content: {
                        value: string;
                    }[];
                }[];
            };
        };
    }[];
}
