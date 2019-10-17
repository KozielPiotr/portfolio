import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Paper: {
      padding: theme.spacing(7, 7, 7, 7),
    },
  }),
);
