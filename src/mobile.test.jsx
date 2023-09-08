import { Selector } from 'testcafe';

fixture('Mobile UI Tests').page('http://localhost:3000');

test('Mobile navigation test', async t => {
  const scpLink = Selector('a').withText('SCP-001: The Scarlet King');
  
  await t
    .resizeWindowToFitDevice('iPhone 6', { portraitOrientation: true })
    .click(scpLink)
    .expect(Selector('h2').withText('SCP-001: The Scarlet King').exists).ok();
});
