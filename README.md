# Next.js Starter Kit

## Giới thiệu

Đây là một dự án Next.js starter kit được xây dựng với TypeScript, cung cấp một cấu trúc dự án chuẩn và các công cụ cần thiết để phát triển ứng dụng web.

## Công nghệ sử dụng

- **Next.js**: Framework React cho phát triển web
- **TypeScript**: Ngôn ngữ lập trình type-safe
- **Tailwind CSS**: Framework CSS utility-first
- **Axios**: Thư viện HTTP client
- **ESLint & Prettier**: Công cụ linting và formatting code
- **Husky**: Git hooks
- **Commitlint**: Kiểm tra format commit message

## Cấu trúc dự án

```
src/
├── app/              # Routes và pages của ứng dụng
├── components/       # React components
│   ├── layouts/     # Layout components
│   ├── ui/          # UI components cơ bản
│   ├── views/       # Components cho từng view
│   └── functions/   # Components chứa logic
├── services/        # API services và clients
├── hooks/           # Custom React hooks
├── utils/           # Utility functions
├── types/           # TypeScript type definitions
├── const/           # Constants
├── i18n/            # Internationalization
├── messages/        # Language files
└── theme/           # Theme configuration
```

## Cài đặt và Chạy dự án

### Yêu cầu hệ thống

- Node.js (phiên bản 14.0.0 trở lên)
- Yarn hoặc npm

### Cài đặt

1. Clone dự án:

```bash
git clone [repository-url]
cd [project-name]
```

2. Cài đặt dependencies:

```bash
yarn install
# hoặc
npm install
```

3. Tạo file môi trường:

```bash
# Development
cp .env.sandbox
# Stage
cp .env.stage
```

Cập nhật các biến môi trường trong file env theo nhu cầu của bạn.

### Chạy dự án

```bash
# Development
yarn dev
# hoặc
npm run dev

# Build
yarn build
# hoặc
npm run build

# Production
yarn start
# hoặc
npm start
```

## Hướng dẫn sử dụng

### 1. Routing

Dự án sử dụng App Router của Next.js 13+. Các routes được định nghĩa trong thư mục `src/app/`.

> ⚠️ **Lưu ý quan trọng về Routing:**
>
> Để đảm bảo tính nhất quán và dễ dàng bảo trì, dự án sử dụng các custom components cho routing:
>
> 1. **KHÔNG** sử dụng `useRouter` trực tiếp từ `next/navigation`. Thay vào đó, **PHẢI** sử dụng `useCustomRouter` từ thư mục `hooks`. Điều này giúp:
>    - Dễ dàng chỉnh sửa và thay thế logic routing trong tương lai
>    - Tập trung quản lý logic routing tại một nơi
>    - Tránh phải sửa đổi code ở nhiều nơi khi cần thay đổi logic routing
>
> ```typescript
> // ❌ KHÔNG sử dụng
> import { useRouter } from "next/navigation";
>
> // ✅ Sử dụng
> import { useCustomRouter } from "@/hooks/useCustomRouter";
> ```
>
> 2. **KHÔNG** sử dụng `Link` trực tiếp từ `next/link`. Thay vào đó, **PHẢI** sử dụng `CustomLink` từ thư mục `components/tool`. Điều này giúp:
>    - Thống nhất cách xử lý navigation trong toàn bộ ứng dụng
>    - Dễ dàng thêm các tính năng tùy chỉnh cho navigation (như analytics, tracking, etc.)
>    - Đơn giản hóa việc thay đổi logic navigation trong tương lai
>
> ```typescript
> // ❌ KHÔNG sử dụng
> import Link from "next/link";
>
> // ✅ Sử dụng
> import { CustomLink } from "@/components/tool/CustomLink";
> ```

### 2. Components

Components được tổ chức theo module với mục đích và cách sử dụng cụ thể:

#### Layouts (`components/layouts/`),

- **MainLayout**: Layout chính cho các trang có navigation bar ở dưới cùng, thường dùng cho các trang chính của ứng dụng
- **ChildPageLayout**: Layout cho các trang con, có header và nút back, thường dùng cho các trang chi tiết hoặc form
- **GeneralLayout**: Layout wrapper chung, chứa các logic và UI dùng chung cho cả MainLayout và ChildPageLayout

#### Views (`components/views/`)

Components cho từng view cụ thể, ví dụ:

- `HomeView`: Component cho trang chủ, hiển thị thông tin tổng quan
- `ActivityView`: Component cho trang hoạt động, hiển thị danh sách hoạt động
- `ProfileView`: Component cho trang profile, quản lý thông tin người dùng

#### Tools (`components/tool/`)

Components công cụ đơn giản:

- `CopyText`: Component sao chép text với một click
- `CustomLink`: Component link tùy chỉnh, thay thế cho Link của Next.js

#### Functions (`components/functions/`)

Components thực hiện chức năng phức tạp cho một module cụ thể.

#### UI Components (`components/ui/`)

Các components UI cơ bản được sử dụng xuyên suốt ứng dụng:

- **Button**: Component nút bấm với nhiều kiểu dáng và trạng thái
- **CheckBox**: Component checkbox cho lựa chọn đơn
- **Formatter**: Component định dạng dữ liệu số
- **HorizontalScroll**: Component cho phép scroll ngang
- **Icon**: Component hiển thị icon
- **Image**: Component hiển thị hình ảnh
- **Text**: Component hiển thị text với các style khác nhau

> ⚠️ **Lưu ý quan trọng về việc sử dụng Components:**
>
> Để đảm bảo tính nhất quán và dễ dàng bảo trì trong toàn bộ ứng dụng, **PHẢI** tuân thủ các quy tắc sau:
>
> 1. **Text Component:**
>    - **PHẢI** sử dụng `Text` component cho tất cả các phần hiển thị text
>    - Không sử dụng thẻ `<p>`, `<span>`, `<div>` trực tiếp để hiển thị text
> 2. **Icon Component:**
>    - **PHẢI** sử dụng `Icon` component cho tất cả các icon
>    - Không sử dụng thẻ `<img>` hoặc SVG trực tiếp cho icon
> 3. **Image Component:**
>    - **PHẢI** sử dụng `Image` component cho tất cả các hình ảnh
>    - Không sử dụng thẻ `<img>` trực tiếp
> 4. **Formatter Component:**
>    - **PHẢI** sử dụng `Formatter` component cho tất cả các số
>    - Đảm bảo định dạng số nhất quán trong toàn bộ ứng dụng

### 3. API Client

Dự án sử dụng Axios để gọi API với các client request đã được cấu hình sẵn:

#### userClientRequest

Client request cho các API liên quan đến user (có Authenticate):

```typescript
import userClientRequest from "@/services/axios/clients/userClientRequest";

// Thiết lập token sau khi nhận được token từ login
import { setAuthToken } from "@/services/axios/clients/userClientRequest";
setAuthToken("your_token");

// Gọi API
const response = await userClientRequest.get("/api/user/profile");
```

#### generalRequest

Client request cho các API chung (không Authenticate):

```typescript
import generalRequest from "@/services/axios/clients/generalRequest";

// Gọi API
const response = await generalRequest.get("/api/general/endpoint");
```

### 4. Custom Hooks

Dự án cung cấp các custom hooks để tái sử dụng logic và đảm bảo tính nhất quán trong toàn bộ ứng dụng:

#### useCustomRouter

Hook tùy chỉnh cho routing, thay thế cho `useRouter` của Next.js:

- Cung cấp các phương thức navigation (push, replace, back)
- Xử lý lỗi navigation tập trung
- Hỗ trợ thêm các logic tùy chỉnh (analytics, tracking)
- Dễ dàng mở rộng và thay đổi logic routing

#### useVibrateEffect

Hook xử lý hiệu ứng rung cho mobile devices:

- Kích hoạt rung khi có tương tác
- Hỗ trợ các pattern rung khác nhau
- Tự động kiểm tra khả năng rung của thiết bị
- Tối ưu hóa cho các thiết bị khác nhau

#### useAssets

Hook quản lý và tối ưu hóa assets (hình ảnh, fonts, etc.):

- Quản lý tập trung các assets của ứng dụng
- Tối ưu hóa việc tải và sử dụng assets
- Cung cấp các helper function để truy cập assets

##### Sử dụng getIcon, getImage để định nghĩa src cho icon và image

Để sử dụng icon và image trong ứng dụng, bạn cần import hook `useAssets`:

```typescript
import useAssets from '@/hooks/useAssets';

// Sử dụng hook để lấy các helper function
const { getIcon, getImage, getVideo, getAudio } = useAssets();

// Sử dụng với component Icon
<Icon
  src={getIcon("icon_name")}
  width={24}
/>

// Sử dụng với component Image
<Image
  src={getImage("image_name")}
  alt="Image description"
/>

// Sử dụng với component Video
<video src={getVideo("video_name")} />

// Sử dụng với component Audio
<audio src={getAudio("audio_name")} />
```

**Lưu ý:**

- Các assets được lưu trữ trong thư mục `public/` với cấu trúc:
  - Icons: `/public/svg/`
  - Images: `/public/images/`
  - Videos: `/public/videos/`
  - Audios: `/public/audios/`
- Các helper function tương tự: `getIcon()`, `getImage()`, `getVideo()`, `getAudio()`
- Mặc định fileType là "svg" cho icons, "png" cho images, "mp4" cho videos, "mp3" cho audios
- Có thể chỉ định fileType khác nếu cần: `getIcon("icon_name", "png")`

#### useFormatter

Hook định dạng dữ liệu (số, ngày tháng, tiền tệ):

- Định dạng số theo locale
- Định dạng ngày tháng
- Định dạng tiền tệ
- Hỗ trợ nhiều ngôn ngữ

### 5. Internationalization (i18n)

```
messages/
├── en.json            # Tiếng Anh
├── vi.json             # Tiếng Việt
└── ...
```

#### Sử dụng i18n trong code

```typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Text>{t('welcome')}</Text>
      <Text>{t('home.title')}</Text>
    </div>
  );
};
```

### 6. Types (`src/types/`) và Constants (`src/const/`)

Thư mục chứa các hằng số được sử dụng trong toàn bộ ứng dụng:

- **logic.const.ts**: Các thông số liên quan đến logic nghiệp vụ (giới hạn file, quy tắc mật khẩu...)
- **ui.const.ts**: Các thông số liên quan đến UI (breakpoints, màu sắc, khoảng cách...)

> ⚠️ **Lưu ý quan trọng:**
>
> 1. **Types:**
>
>    - Đặt tên file theo quy ước: `[chức năng].types.ts`
>    - Ưu tiên dùng enum thay vì const và Union
>    - Export tất cả types để có thể tái sử dụng
>    - Thêm JSDoc comments cho các types phức tạp
>    - **Ưu tiên dùng enum thay vì const và Union.**
>      Ví dụ:
>
>      ```typescript
>      // ❌ KHÔNG NÊN
>      export const BUTTON_VARIANTS = ["primary", "secondary", "outline"] as const;
>      export type ButtonVariant = (typeof BUTTON_VARIANTS)[number];
>      // hoặc
>      export type ButtonVariant = "primary" | "secondary" | "outline";
>
>      // ✅ NÊN DÙNG ENUM
>      export enum ButtonVariant {
>        Primary = "primary",
>        Secondary = "secondary",
>        Outline = "outline",
>      }
>      ```
>
> 2. **Constants:**
>    - Đặt tên file theo quy ước: `[chức năng].const.ts`
>    - Sử dụng UPPER_SNAKE_CASE cho tên constant
>    - Nhóm các constants liên quan vào một object
>    - Thêm comments giải thích ý nghĩa của các giá trị đặc biệt

### 7. Function

Là nơi định nghĩa các functions dùng chung cho nhiều chức năng khác trong ứng dụng.

#### Các functions tiêu biểu

**compactText**: Rút gọn chuỗi để hiển thị ra giao diện

```typescript
import { compactText } from "@/functions/compactText";

// Sử dụng
const longText = "UQCe-ibsR6vG3uv_bmD73q7NUhh9sy4lydoopHunsM9sWeol";
const compactedText = compactText(longText);
console.log(compactedText); // UQC...eol
```

## Quy tắc phát triển

### 1. Cấu trúc của một component, function... nói chung

#### Cấu trúc chuẩn cho một thư mục

```
[Tên thư mục]/
├── index.ts        # File code chính
├── types.ts        # Types định nghĩa riêng (nếu cần)
└── functions/      # Thư mục chứa các function riêng
    ├── index.ts
    ├── types.ts
    └── ...
```

**Quy tắc đặt tên:**

- Tên thư mục phải mô tả rõ chức năng của đối tượng (component/function)
- Sử dụng PascalCase cho tên component
- Sử dụng camelCase cho tên function

#### Cấu trúc file

**index.ts**

- File chính chứa code của component/function
- Export các thành phần cần thiết
- Có thể chứa types đơn giản (nếu ít)

**types.ts**

- Chứa các types phức tạp hoặc được sử dụng nhiều
- Không bắt buộc nếu types đơn giản
- Có thể định nghĩa chung trong file index

#### Thư mục functions con

- Chứa các function chỉ dùng riêng cho component/function hiện tại
- Không nên đặt trong thư mục functions chung của dự án
- Tuân thủ cấu trúc tương tự như thư mục cha

#### Trường hợp đơn giản

Nếu component/function đơn giản (chỉ có một file), có thể đặt trực tiếp:

```
src/
├── components/
│   └── Button.tsx
└── functions/
    └── compactText.ts
```

### 2. Code Style

- Sử dụng TypeScript cho type safety
- Tuân thủ cấu trúc thư mục đã định nghĩa
- Sử dụng ESLint và Prettier để format code

### 3. Git Workflow

- Tạo branch mới cho mỗi feature
- Commit message phải tuân thủ commitlint
- Code review trước khi merge
- Sử dụng Husky để kiểm tra code trước khi commit

### 4. Best Practices

- Sử dụng các custom hooks để tái sử dụng logic
- Quản lý state thông qua store
- Sử dụng i18n cho đa ngôn ngữ
- Tối ưu hóa performance

## Scripts

- `yarn dev`: Chạy development server
- `yarn build`: Build dự án
- `yarn start`: Chạy production server
- `yarn lint`: Kiểm tra lỗi ESLint
- `yarn format`: Format code với Prettier

## Contributing

1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## License

[MIT License](LICENSE)
