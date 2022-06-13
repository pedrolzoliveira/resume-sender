import { Octokit } from "octokit";

export interface Issue {
    number: number;
    body?: string;
}

export interface IssueRepo {
    owner: string;
    repo: string;
    getIssuesByLabel(label: string): Promise<Issue[]>;
}


export class IssueRepoOcktokit implements IssueRepo {

    private octokit: Octokit;
    owner: string;
    repo: string;

    constructor({ repo, owner }: { repo: string, owner: string }) {
        this.octokit = new Octokit();
        this.repo = repo;
        this.owner = owner;
    }
    
    async getIssuesByLabel(label: string): Promise<Issue[]> {
        try {
            const request = await this.octokit.request('GET /repos/{owner}/{repo}/issues', {
                owner: this.owner,
                repo: this.repo,
                labels: label,
                per_page: 100
            });
            return request.data;
        } catch(error) {
            console.log(`Verifique o repositório e o usuário, retornando lista vazia por conta de um erro: ${error}`);
            return [];
        }
    }
}
