'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc =
          Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc
            ? !m.__esModule
            : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            }
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', {
          enumerable: true,
          value: v
        });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (
          k !== 'default' &&
          Object.prototype.hasOwnProperty.call(
            mod,
            k
          )
        )
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', {
  value: true
});
const connectDB_1 = __importStar(
  require('./connectDB')
);
// ConnectDB
(0, connectDB_1.default)();
async function main() {
  // Insert a single user
  const user =
    await connectDB_1.prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'johndoe@gmail.com'
      }
    });
  console.log(JSON.stringify(user, undefined, 2));
}
main()
  .then(async () => {
    await connectDB_1.prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await connectDB_1.prisma.$disconnect();
    process.exit(1);
  });
