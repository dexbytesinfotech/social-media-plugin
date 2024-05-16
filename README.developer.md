## @dexbytes/social-media-plugin

### Introduction

social-media-plugin is an npm package designed to simplify the process of fetching data from various social media platforms such as YouTube, Facebook, and Instagram. Leveraging access tokens, this package allows users to access platform data securely and efficiently. Additionally, it provides functionality to generate access tokens, streamlining the setup process for developers.

### Installation

To install @dexbytes/social-media-plugin use npm or yarn:

```
npm install @dexbytes/social-media-plugin

```

### Usage

To utilize @dexbytes/social-media-plugin effectively, follow these steps:
You can also refer to our example repositiory https://github.com/dexbytesinfotech/smp-examples.git

1. **Import Package**:
   ```javascript
   import { SMPFactory, Actions, Repositories, Resources } from '@dexbytes/social-media-plugin';
   ```

2. **Initialize Instance**:
   Initialize an instance of SMPFactory with the desired request body:
   ```javascript
   const factory = new SMPFactory({
       resource: Resources.meta,
       module: Repositories.auth,
       action: Actions.generateAuthUrl,
       payload: {
           clientId,
           redirectUri,
           permissions
       }
   });
   ```

3. **Operate**:
   Execute the operation using the `operate` method:
   ```javascript
   const result = await factory.operate();
   ```

### Example

Here's an example demonstrating how to use @dexbytes/social-media-plugin to get a meta auth URL and a long-lived token:

```javascript
import { SMPFactory, Actions, Repositories, Resources } from 'social-media-plugin';

const factory = new SMPFactory({
    resource: Resources.meta,
    module: Repositories.auth,
    action: Actions.generateAuthUrl,
    payload: {
        clientId,
        redirectUri,
        permissions
    }
});

const result = await factory.operate();
```

### Support and Contributions

For support or inquiries regarding @dexbytes/social-media-plugin, feel free to reach out to the maintainers. Contributions are also welcome, and developers are encouraged to submit pull requests or report any issues encountered during usage.

### License

@dexbytes/social-media-plugin is licensed under the [MIT License](https://opensource.org/licenses/MIT), granting developers the freedom to use, modify, and distribute the software within their projects.

---

With @dexbytes/social-media-plugin, accessing data from social media platforms becomes more accessible and streamlined. By following the instructions provided in this README, developers can integrate the package seamlessly into their projects and leverage its capabilities to enhance functionality and efficiency.