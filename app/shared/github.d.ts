// i know i can import one but
// i can't find one so here we are

export interface GithubUser {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  url: string;
}

export interface GithubCommit {
  sha: string;
  author: {
    email: string;
    name: string;
  };
  message: string;
  distinct: boolean;
  url: string;
}

export interface GithubPullRequest {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  body: string;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  merged_at: string | null;
  merge_commit_sha: string | null;
  draft: boolean;
  // there's more but i don't wanna
}

export interface GithubRelease {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  // author: AUTHOR
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  tarball_url: string;
  zipball_url: string;
  body: string;
  short_description_html: string;
  is_short_description_html_truncated: boolean;
}

export interface GithubCommitEventPayload {
  push_id: number;
  size: number;
  distinct_size: number;
  ref: string;
  head: string;
  before: string;
}

export interface GithubPullRequestEventPayload {
  action: string;
  number: number;
  pull_request: GithubPullRequest;
}

export interface GithubReleaseEventPayload {
  action: string;
  release: GithubRelease;
  public: boolean;
  created_at: string;
}

export interface GithubEvent {
  id: string;
  type: "PushEvent" | "CreateEvent" | "ReleaseEvent" | "PullRequestEvent";
  actor: GithubUser;
  repo: GithubRepo;
  payload:
    | GithubCommitEventPayload
    | GithubPullRequestEventPayload
    | GithubReleaseEventPayload;
  public: boolean;
  created_at: string;
}

export interface GithubPushEvent extends GithubEvent {
  type: "PushEvent";
  payload: GithubCommitEventPayload;
}

export interface GithubCreateEvent {}

export interface GithubReleaseEvent {}
