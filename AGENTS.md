# Agents

## Adding Project Cards

When adding new project/repo cards to the website:

1. Fetch repo info from GitHub API first:
   ```
   gh api repos/{owner}/{name} --jq '{name, description, language, stars: .stargazers_count, url: .html_url}'
   ```
2. Use real data from the API response for the card: description, language badge color, and star count.
3. Place cards in the appropriate section (Projects, Freenet, Contributions) in `index.vto`.
4. Follow the existing Material Design card style: `bg-[#1e1e1e] rounded-2xl p-6 shadow-lg` with section-matching hover accent colors.
