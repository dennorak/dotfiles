-- globals
vim.g.mapleader = " "

-- options
vim.o.number = true
vim.o.relativenumber = true
vim.o.wrap = false
vim.o.tabstop = 4
vim.o.signcolumn = "yes"
vim.o.shiftwidth = 4
vim.o.swapfile = false
vim.o.winborder = "rounded"

-- keybinds
vim.keymap.set('n', '<leader>so', ':update<CR> :source<CR>') -- write changes + source file
vim.keymap.set('n', '<leader>w', ':write<CR>')
vim.keymap.set('n', '<leader>q', ':quit<CR>')                -- write changes + source file
vim.keymap.set('n', '<leader>f', vim.lsp.buf.format)         -- format document
vim.keymap.set('n', '<leader>e', ':Oil<CR>')                 -- Open explorer
vim.keymap.set('n', '<leader>o', ':Pick files<CR>')          -- Open file picker
vim.keymap.set('n', '<leader>h', ':Pick help<CR>')           -- Open help picker
vim.keymap.set('n', '<leader>t', ':split | terminal<CR>')    -- open terminal

-- vim.pack (pacman) installs
vim.pack.add({
	{ src = "https://github.com/vague2k/vague.nvim" }, -- color scheme
	{ src = "https://github.com/neovim/nvim-lspconfig" }, -- lsp config (intellisense)
	{ src = "https://github.com/stevearc/oil.nvim" },  -- file explorer
	{ src = "https://github.com/nvim-mini/mini.pick" }, -- picker
})

-- customization
vim.cmd("colorscheme vague")

-- enable language servers
vim.lsp.enable({ "lua_ls", "rust_analyzer", "eslint" })

-- add 'vim' to global lsp for lua
vim.lsp.config("lua_ls", {
	settings = {
		Lua = {
			workspace = {
				library = vim.api.nvim_get_runtime_file("", true),
			}
		}
	}
})

-- autocomplete
vim.api.nvim_create_autocmd('LspAttach', {
	callback = function(ev)
		local client = vim.lsp.get_client_by_id(ev.data.client_id)
		if client.server_capabilities.completionProvider then
			-- Example: attach keymaps for completion
			local buf = ev.buf
			vim.api.nvim_buf_set_keymap(buf, 'i', '<C-Space>', '<cmd>lua vim.lsp.buf.completion()<CR>',
				{ noremap = true, silent = true })
		end
	end,
})
vim.cmd("set completeopt+=noselect")

-- init plugins
require "mini.pick".setup()
require "oil".setup()
