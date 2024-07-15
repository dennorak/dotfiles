# Put your custom themes in this folder.
# See: https://github.com/ohmyzsh/ohmyzsh/wiki/Customization#overriding-and-adding-themes
#
# Example:

PROMPT='%m %B%F{blue}:: %b%F{magenta}%3~ $(hg_prompt_info)$(git_prompt_info)%B%(!.%F{red}.%F{blue})»%f%b '
RPS1='%(?..%F{red}%? ↵%f)'

ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg[cyan]%}‹"
ZSH_THEME_GIT_PROMPT_SUFFIX="› %{$reset_color%}"

ZSH_THEME_HG_PROMPT_PREFIX="%{$fg[magenta]%}hg:‹%{$fg[yellow]%}"
ZSH_THEME_HG_PROMPT_SUFFIX="%{$fg[magenta]%}› %{$reset_color%}"
ZSH_THEME_HG_PROMPT_DIRTY=" %{$fg[red]%}✗"
ZSH_THEME_HG_PROMPT_CLEAN=""