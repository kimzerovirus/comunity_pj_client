import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Container, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { useContext } from 'react';

import { ColorMode, ThemeContext, useTheme, useToggleTheme } from './CustomThemeProvider';

const menuList = [
	{ name: '홈', link: '/' },
	// { name: '일상', link: '/' },
	{ name: '프로젝트', link: '/post/project' },
	{ name: 'TIL', link: '/post/til' },
];

const DarkToggleButton = () => (
	<IconButton color="inherit" sx={{ '&:hover': { color: '#FFD500' } }}>
		<Brightness4Icon />
	</IconButton>
);

const LightToggleButton = () => (
	<IconButton color="inherit" sx={{ '&:hover': { color: '#e66b27' } }}>
		<Brightness7Icon />
	</IconButton>
);

const ThemeToggleButton = () => {
	return useTheme() === ColorMode.light ? <LightToggleButton /> : <DarkToggleButton />;
};

export default function Header() {
	const { toggleColorMode } = useContext(ThemeContext);

	return (
		<Container maxWidth="xl">
			<Toolbar disableGutters variant="dense" sx={{ maxHeight: '80px' }}>
				<h1>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="https://github.com/kimzerovirus"
						sx={{
							mr: 2,
							fontWeight: 700,
							color: 'inherit',
							textDecoration: 'none',
							lineHeight: '80px',
						}}
					>
						KIMZEROVIRUS
					</Typography>
				</h1>
				<Grid container justifyContent="flex-end">
					{menuList.map(({ name, link }, idx) => (
						<Grid item key={idx}>
							<Button
								component="a"
								href={link}
								sx={{
									color: 'inherit',
									fontSize: '1rem',
									textDecoration: 'none',
								}}
							>
								{name}
							</Button>
						</Grid>
					))}
				</Grid>
				<div onClick={toggleColorMode}>
					<ThemeToggleButton />
				</div>
				<IconButton href="/search" color="inherit">
					<SearchIcon />
				</IconButton>
			</Toolbar>
		</Container>
	);
}
